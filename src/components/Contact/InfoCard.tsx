import React from "react";

interface InfoCardProps {
    title: string;
    details: string[];
    itemProp?: string;
}

export function InfoCard(props: InfoCardProps) {
    const { title, details, itemProp } = props;
    return (
        <div className="bg-black/40 p-6 rounded-lg border border-purple-500/20">
            <h3 className="text-purple-400 font-semibold mb-4">{title}</h3>
            <p className="text-gray-300" itemProp={itemProp}>
                {details.map((detail, index) => (
                    <React.Fragment key={index}>
                        {detail}
                        {index < details.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
}