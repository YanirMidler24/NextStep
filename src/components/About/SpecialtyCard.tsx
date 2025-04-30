export function SpecialtyCard({ title, skills }: { title: string; skills: string[] }) {
    return (
        <div className="bg-black/40 p-4 rounded-lg">
            <h4 className="text-purple-400 font-medium mb-2">{title}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
                {skills.map((skill, index) => (
                    <li key={index} itemProp="knowsAbout">{skill}</li>
                ))}
            </ul>
        </div>
    );
}
