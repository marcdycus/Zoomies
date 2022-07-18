import { HashRouter as Router } from 'react-router-dom';
// import { UserContext } from '../src/hooks';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyle from 'styles/GlobalStyle';
// import theme from 'styles/Theme';
import { addons } from '@storybook/addons';
import { img as Ava } from '../src/assets/imgs/ava.jpg';

addons.setConfig({
  isFullscreen: true
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'white',
        value: '#ffffff'
      },
      {
        name: 'light',
        value: '#ECEFF2'
      },
      {
        name: 'dark',
        value: '#888'
      }
    ],
    grid: {
      isActive: true,
      opacity: 0.2,
      disable: false
    }
  }
};

// const user = {
//   displayName: 'Ava Frances',
//   firstName: 'Ava',
//   lastName: 'Frances',
//   id: 'defaultId',
//   imgUrl: Ava,
//   memberCount: 8,
//   title: 'Yoga Instructor',
//   userId: 'defaultUserId'
// };

// console.log(UserContext);

const withThemeProvider = (Story, context) => {
  return (
    <div>
      {/* <ThemeProvider> */}
      <Router>
        {/* <UserContext.Provider value={user}> */}
        <Story {...context} />
        {/* </UserContext.Provider> */}
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
};
export const decorators = [withThemeProvider];
