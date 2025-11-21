import { Sidebar, SidebarHeader } from "@/components/ui/sidebar"
import { useState } from "react";
import { useNavigation } from "react-router-dom";

const Service_Logo = [
    {
        Icon: Sidebar,
        title: "Carregando",
        color: "text-primary"
     },
];

const Progress () {
    const [Progress, setProgress] = useState[0]
    const [Service_Logo] = useNavigation[0]
    
    return (
        <><section className="sidebar gradient">
            <div className="sidebar6 gradient bar-medium">
                <p className="sidebar gradient name"> Carregando </p>
            </div>
        </section><section className="barprogress gradient effect ms-medium">
                <div className="barprogress gradient effect">
                    <p className="barprogress gradient"> {Service_Logo} </p>
                </div>
            </section></>
    );
}
