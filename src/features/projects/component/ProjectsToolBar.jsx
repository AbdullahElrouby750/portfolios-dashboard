import React from "react";
import ToolBarWrapper from "../../../shared/components/toolBar/ToolBarWrapper";
import useStore from "../../../shared/hooks/conetext-hooks/useStore";
import navigateToModal from "../../../shared/utils/navigateToModal";


function ProjectsToolBar({ navigate, location, addFn, userRole, setUpdatingGroups, updatingGroups }) {
  const { setRequest } = useStore();


  return <ToolBarWrapper>

      <div className=' cursor-pointer hover:text-yellow-400 active:text-yellow-600 transition-all '>
        <p>Filter</p>
      </div>

    {
      (userRole !== 'user') &&
      <div className={` cursor-pointer transition-all ${updatingGroups ? 'text-yellow-400 hover:text-yellow-400 active:text-yellow-400' : ' hover:text-yellow-400 active:text-yellow-600'}`}
        onClick={() => setUpdatingGroups(current => !current)}>
        <p>Avilable</p>
      </div>
    }

    {
      (userRole !== 'user') &&
      <div className={` cursor-pointer hover:text-success-default active:text-success-active transition-all duration-300 
    ${location.pathname.includes('projects/add') ? 'text-success-default' : ''}`}
        onClick={() => navigateToModal(location, navigate, 'add', { showState: true }, setRequest, addFn, null, 'Add', '/projects/create', 'projects')}>
        <p>Add</p>
      </div>
    }

    {
      (userRole !== 'user') &&
      <div className=' cursor-pointer hover:text-danger-default active:text-danger-active transition-all '>
        <p>Delete</p>
      </div>
    }

    {
      (userRole === 'user') &&
      <div className=' cursor-pointer hover:text-brand-default active:text-brand-active transition-all '>
        <p>Request Access</p>
      </div>
    }
  </ToolBarWrapper>;
}

export default ProjectsToolBar;