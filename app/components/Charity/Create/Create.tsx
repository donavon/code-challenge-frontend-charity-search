import { Form } from '@remix-run/react';
import type { NewCharity, NewCharityErrors } from '~/types/Charity.types';
import { Input } from './Input';
import { Textarea } from './Textarea';

type CreateProps = {
  errors: NewCharityErrors;
  charity: NewCharity;
};

// This can be made a lot better with a form library such as remix-forms or the like

export const Create = ({ errors = {}, charity = {} }: CreateProps) => (
  <>
    <h2>Add a New Charity</h2>

    {errors.general && <strong>{errors.general}</strong>}

    <article>
      <Form action="/charities/new" method="post">
        <Input
          name="name"
          label="Name"
          error={errors.name}
          value={charity.name}
        />
        <Input name="ein" label="EIN" error={errors.ein} value={charity.ein} />
        <Input
          name="city"
          label="City"
          error={errors.city}
          value={charity.city}
        />
        <Input
          name="state"
          label="State"
          error={errors.state}
          value={charity.state}
        />
        <Input
          name="website"
          label="Website"
          error={errors.website}
          value={charity.website}
        />
        <Input
          name="logo"
          label="Logo URL"
          error={errors.logo}
          value={charity.logo}
        />
        <Input
          name="mission"
          label="Mission"
          error={errors.mission}
          value={charity.mission}
        />

        <Textarea
          name="about"
          label="About"
          error={errors.about}
          value={charity.about}
        />

        <button type="submit">Add</button>
      </Form>
    </article>
  </>
);
