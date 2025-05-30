import './SidebarMenu.css'
import AppsIcon from '@mui/icons-material/Apps';

function SidebarMenu() {
  return (
    <div className="sidebar-menu">
        <button className='sidebar-button'><AppsIcon style={{ fontSize: 60 }} color='action'/></button>
       
    </div>
  );
}

export default SidebarMenu;