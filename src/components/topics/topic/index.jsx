import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/format";

export default function Topic({ item }) {
    return (
        <Link to="/" className="py-3 px-4 transition-colors hover:bg-white/[0.03] relative">
            <div className="text-[13px] text-[#71767b] leading-4">{item.title}</div>
            <div className="text-[15px] font-bold leading-5 mt-0.5">
                {item.topic.type == "tag" && "#"}{item.topic.value}
            </div>
            {item?.postCount && (
                <div className="text-[13px] text-[#71767b] mt-1 leading-4">
                    {numberFormat(item.postCount)} posts
                </div>
            )}
            <button className="w-[34.75px] text-[#71767b] h-[34.75px] rounded-full absolute top-1.5 right-2 flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] transition-colors">
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path fill="currentColor" d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
            </button>
        </Link>
    )
}