import React from 'react';
import type { FC } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { navBatItems } from '../../../../routes/navBarItems';
import { useNavbarStyles } from '../styles/useNavbarStyles';

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
  // useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';


// function Router(props: { children?: React.ReactNode }) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/drafts">{children}</StaticRouter>;
//   }

//   return (
//     <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
//       {children}
//     </MemoryRouter>
//   );
// }

// interface ListItemLinkProps {
//   icon?: React.ReactElement;
//   primary: string | undefined
//   to: string;
// }


// const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
//   itemProps,
//   ref,
// ) {
//   return <RouterLink ref={ref} {...itemProps} role={undefined} />;
// });

// function ListItemLink(props: ListItemLinkProps) {
//   const { icon, primary, to } = props;

//   return (
//     <li>
//       <ListItem
//         // @ts-ignore
//         button component={Link} to={to}>
//         <ListItemText primary={primary} />
//       </ListItem>
//     </li>
//   );
// }



const MobileDrawer: FC = (props) => {
  // @ts-ignore
  const { handleDrawerToggle } = props
  const navigate = useNavigate();
  const classes = useNavbarStyles()

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const buttonProps = (value: any, route: string) => ({
    selected: selectedIndex === value,
    onClick: () => {
      setSelectedIndex(value)
      navigate(route)
    }
  });

  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: "100%" }} className={classes.drawer} >
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider className={classes.divider} />
      <List>
        {navBatItems.map((item: any, index: number) => (
          <div key={index}>
            <ListItem
              disablePadding
              {...buttonProps(index, item.path)}
            >
              <ListItemButton sx={{ textAlign: 'center' }}
                className={classes.drawerButton}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
        
            <Divider className={classes.divider} />
          </div>
        ))}
        <Box sx={{ width: '100%' }}>
          <Button
            variant="contained"
            className={classes.applyButtonDrawer}
            onClick={() => navigate('/apply')}
          >
            Konekte
          </Button>
        </Box>
      </List>
    </Box>
  );
};

export default MobileDrawer;
