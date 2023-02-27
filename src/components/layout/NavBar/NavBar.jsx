import { usafLogo } from 'assets/icons';
import clsx from 'clsx';
import { NavLinksDropdown } from 'components/modules/dropdowns';
import { NavLinkButton } from 'components/widgets/buttons';
import { Divide } from 'hamburger-react';
import {
  ABOUT,
  EVENTS,
  HOLIDAY,
  HOME,
  VOLUNTEER,
  DEPARTMENTS,
  FAQS,
  SIGN_IN,
  DONATE
} from 'navigation/CONSTANTS';
import { useMemo } from 'react';
import { useState } from 'react';

const navButtons = [
  {
    to: HOME,
    label: 'Home'
  },
  {
    to: ABOUT,
    label: 'About US'
  },
  {
    label: 'Get Involved',
    dropdownLinks: [
      {
        to: DONATE,
        label: 'Donate'
      },
      {
        to: VOLUNTEER,
        label: 'Volunteer'
      },
      {
        to: EVENTS,
        label: 'Events'
      },
      {
        to: HOLIDAY,
        label: 'Holidays'
      }
    ]
  },
  {
    to: DEPARTMENTS,
    label: 'Departments'
  },
  {
    to: FAQS,
    label: 'FAQs'
  },
  {
    to: SIGN_IN,
    label: 'Sign in / Create Account',
    signIn: true
  }
];

export default function NavBar() {
  const [opened, setOpened] = useState(false);

  const buttonList = useMemo(
    () =>
      navButtons.map(({ label, to, signIn, dropdownLinks }, index) => {
        if (Array.isArray(dropdownLinks))
          return (
            <NavLinksDropdown
              key={label + index}
              label={label}
              dropdownLinks={[...dropdownLinks]}
              className="dropdown-center"
              defaultIcon
            />
          );

        return (
          <NavLinkButton key={label + index} to={to} isAcccent={signIn}>
            {label}
          </NavLinkButton>
        );
      }),
    []
  );

  return (
    <nav className="bg-base-100 drop-shadow-lg sticky -top-1 isolate">
      <div className={clsx('grid items-center px-6 py-4', 'md:flex mx-auto max-w-xl')}>
        <div className="flex items-center mr-auto w-full md:w-auto">
          <img role="presentation" src={usafLogo} className="w-12 h-12 md:w-20 md:h-20 mr-auto" />

          <span className="md:hidden">
            <Divide toggle={setOpened} toggled={opened} />
          </span>
        </div>

        {/* Mobile view */}
        <div
          className={clsx('grid gap-1 md:hidden mx-auto px-8', {
            'invisible h-0 mt-0': !opened,
            'mt-8 mb-3': opened
          })}
        >
          {buttonList}
        </div>

        {/* Tablet and Destop view */}
        <div className={clsx('hidden md:grid grid-flow-col gap-1')}>{buttonList}</div>
      </div>
    </nav>
  );
}
