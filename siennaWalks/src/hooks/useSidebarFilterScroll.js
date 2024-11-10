import { useState } from "react";

const useSidebarFilterScroll = () =>{
    /*funcion para el  srcroll horizontal del sidebar*/
    const [sidebarFilter,setSidebarFilter] = useState(false)

    const onChangeSidebarFilter = () =>{
        setSidebarFilter(!sidebarFilter);
        console.log(sidebarFilter);
    }

   return { sidebarFilter, onChangeSidebarFilter } 
}

export { useSidebarFilterScroll }