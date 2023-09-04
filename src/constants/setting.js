import Display from '../../assets/icon/display-icon.svg';
import FundAlert from '../../assets/icon/reminder-fund-icon.svg';
import ReminderCloseFund from '../../assets/icon/reminder-to-close-fund-icon.svg';
import VoteReminder from '../../assets/icon/reminder-vote-icon.svg';
import SetCurrency from '../../assets/icon/set-currency-icon.svg';
import Language from '../../assets/icon/language-icon.svg';

import LogoApp from '../../assets/icon/logo-app-icon.svg';
import RegisterPremium from '../../assets/icon/register-premium-icon.svg';

const configSetting = [
  {
    id: 1,
    name: 'Display',
    title: 'Display',
    icon: <Display size={30} color='blue' />,
  },
  {
    id: 2,
    name: 'FundAlert',
    title: 'Fund Alert',
    icon: <FundAlert size={30} color='blue' />,
  },
  {
    id: 3,
    name: 'ReminderToCloseFund',
    title: 'Reminder to close fund',
    icon: <ReminderCloseFund size={30} color='blue' />,
  },
  {
    id: 4,
    name: 'VoteReminder',
    title: 'Vote reminder',
    icon: <VoteReminder size={30} color='blue' />,
  },
  {
    id: 5,
    name: 'SetCurrency',
    title: 'Set Currency',
    icon: <SetCurrency size={30} color='blue' />,
  },
  {
    id: 6,
    name: 'Language',
    title: 'Language',
    icon: <Language size={30} color='blue' />,
  },
];

const premium = [
  {
    id: 1,
    name: 'LogoApp',
    title: 'Logo App',
    icon: <LogoApp size={30} color='blue' />,
  },
  {
    id: 2,
    name: 'RegisterPremium',
    title: 'Register premium',
    icon: <RegisterPremium size={30} color='blue' />,
  },
];

export { configSetting, premium };
