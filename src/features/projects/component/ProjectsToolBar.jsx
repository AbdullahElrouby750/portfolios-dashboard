import React from "react";
import ToolBarWrapper from "../../../shared/components/toolBar/ToolBarWrapper";
import useProject from "../../../shared/hooks/conetext-hooks/useStore";
const navigateTo = (location, navigate, to, state, setRequest, addFn) => {

  setRequest({
    apiFn: addFn,
    type: 'Add',
    data: null,
    path: '/projects/create'
  });
  if (!location.pathname.includes(`projects/${to}`)) navigate(`${to}`, { state: state })
}

function ProjectsToolBar({ navigate, location, addFn }) {
  const { setRequest } = useProject();


  return <ToolBarWrapper>
    <div className=' cursor-pointer hover:text-yellow-400 active:text-yellow-600 transition-all '>
      <p>Filter</p>
    </div>
    <div className=' cursor-pointer hover:text-yellow-400 active:text-yellow-600 transition-all '>
      <p>Avilable</p>
    </div>
    <div className={` cursor-pointer hover:text-success-default active:text-success-active transition-all duration-300 
    ${location.pathname.includes('projects/add') ? 'text-success-default' : ''}`}
      onClick={() => navigateTo(location, navigate, 'add', { showState: true }, setRequest, addFn)}>
      <p>Add</p>
    </div>
    <div className=' cursor-pointer hover:text-danger-default active:text-danger-active transition-all '>
      <p>Delete</p>
    </div>
    <div className=' cursor-pointer hover:text-brand-default active:text-brand-active transition-all '>
      <p>Request Access</p>
    </div>
  </ToolBarWrapper>;
}

export default ProjectsToolBar;