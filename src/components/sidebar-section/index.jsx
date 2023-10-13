import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SidebarSection({ title, children, more }) {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border-[#16181c] overflow-hidden">
            <h5 className="px-3 py-4 text-xl leading-6 font-extrabold flex items-center">
                {title}
            </h5>
            <div className="grid">
                {children}
            </div>
            {more && (
                <Link to={more} className="h-[52px] flex items-center px-4 text-[#1d9bf0] transition-colors hover:bg-white/[0.03]">
                    Daha fazla göster
                </Link>
            )}
        </section>
    )
}

SidebarSection.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}