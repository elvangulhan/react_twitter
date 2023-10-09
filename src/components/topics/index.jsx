import { topics } from "~/utils/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2xl border-[#16181c] overflow-hidden">
            <h5 className="px-3 py-4 text-xl leading-6 font-extrabold flex items-center">
                İlgini çekebilecek gündemler
            </h5>
            <div className="grid">
                {topics.map((topic, index) => (
                    <Topic item={topic} key={index} />
                ))}
            </div>
        </section>
    )
}