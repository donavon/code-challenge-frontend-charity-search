import { Form } from '@remix-run/react';
import { Button } from '~/components/Button';
import type { NewCharity, NewCharityErrors } from '~/types/Charity.types';
import { Input } from './Input';

type CreateProps = {
  errors: NewCharityErrors;
  charity: NewCharity;
};

// This can be made a lot better with a form library such as remix-forms or the like

export const Create = ({ errors = {}, charity = {} }: CreateProps) => (
  <div className="flex flex-col items-center gap-4">
    <h2 className="text-2xl">Add a New Charity</h2>

    {errors.general && <strong>{errors.general}</strong>}

    <Form
      className="flex flex-col gap-4 max-w-3xl"
      action="/charities/new"
      method="post"
    >
      <Input
        name="name"
        label="Name"
        error={errors.name}
        value={charity.name}
      />

      <Input name="ein" label="EIN" error={errors.ein} value={charity.ein} />

      <div className="flex justify-between gap-6">
        <Input
          name="city"
          label="City"
          className="flex-[3]"
          error={errors.city}
          value={charity.city}
        />
        <Input
          name="state"
          label="State"
          className="flex-[2]"
          error={errors.state}
          value={charity.state}
        />
      </div>

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

      <Input
        name="about"
        label="About"
        error={errors.about}
        value={charity.about}
        type="long"
      />

      <nav className="flex justify-end">
        <Button type="submit">Add Charity</Button>
      </nav>
    </Form>
  </div>
);
