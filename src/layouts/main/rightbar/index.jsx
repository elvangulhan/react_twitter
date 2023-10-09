import Premium from "~/components/premium";
import Search from "./search";
import Topics from "~/components/topics";

function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}

export default RightBar;