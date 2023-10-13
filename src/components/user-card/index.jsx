import { useState } from "react";
import Button from "../button";

export default function UserCard({user}){

    const [following, setFollowing] = useState(false);

    return (
        <button className="py-3 px-4 flex gap-3 text-left hover:bg-white/[0.03] transition-colors">
            <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex-1">
                <div className="text-[15px] text-[#e7e9ea] leading-5 font-bold">{user.fullname}</div>
                <div className="text-[15px] text-[#71767b]">{user.username}</div>
            </div>
            <div>
                {following ? (
                    <Button size="small" variant="white-outline" className="whitespace-nowrap group" onClick={() => setFollowing(false)}>
                        <div className="flex group-hover:hidden">Takip ediliyor</div>
                        <div className="hidden group-hover:flex">Takibi bırak</div>
                    </Button>
                ) : (
                    <Button size="small" variant="white" onClick={() => setFollowing(true)}>
                        Takip et
                    </Button>
                )}
            </div>
        </button>
    )
}