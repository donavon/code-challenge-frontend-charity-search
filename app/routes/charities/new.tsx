import type { ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { json, useActionData } from 'react-router';
import { ZodError } from 'zod';
import { createCharity } from '~/api.server';
import { Create } from '~/components/Charity/Create';
import type { NewCharity } from '~/types/Charity.types';
import { NewCharitySchema } from '~/types/Charity.types';

const getCharityFromFormData = (formData: FormData) => {
  // TODO: dry this up
  const name = formData.get('name');
  const logo = formData.get('logo');
  const city = formData.get('city');
  const state = formData.get('state');
  const mission = formData.get('mission');
  const about = formData.get('about');
  const website = formData.get('website');
  const ein = formData.get('ein');

  return {
    name: name ? String(name) : undefined,
    logo: logo ? String(logo) : undefined,
    city: city ? String(city) : undefined,
    state: state ? String(state) : undefined,
    mission: mission ? String(mission) : undefined,
    about: about ? String(about) : undefined,
    website: website ? String(website) : undefined,
    ein: ein ? String(ein) : undefined,
  };
};

type ActionData = {
  errors: Record<string, string>;
  charity: NewCharity;
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const possibleNewCharity = getCharityFromFormData(formData);

  try {
    // throw if user input is not properly formatted. also makes sure all required fields are present
    const validatedNewCharity = NewCharitySchema.parse(possibleNewCharity);
    // strip the dash when saving to the database
    const dbNewCharity = {
      ...validatedNewCharity,
      ein: validatedNewCharity.ein.replace('-', ''),
    };
    const { id } = await createCharity(dbNewCharity);
    return redirect(`/charities/${id}?new`);
  } catch (exception) {
    // API error
    if (exception instanceof ZodError) {
      const errors = exception.issues.reduce((acc, { path, message }) => {
        const [key] = path;
        acc[key] = message;
        return acc;
      }, {} as Record<string, string>);
      return json({ errors, charity: possibleNewCharity });
    }

    // general error
    return json({
      errors: { general: 'Something went wrong. Please try again' },
      charity: possibleNewCharity,
    });
  }
};

const New = () => {
  const { errors = {}, charity = {} } = (useActionData() ?? {}) as ActionData;
  return <Create errors={errors} charity={charity} />;
};

export default New;
