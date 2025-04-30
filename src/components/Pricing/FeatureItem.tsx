import { CheckIcon } from './CheckIcon';

export function FeatureItem({ feature }: { feature: string }) {
    return (
        <li className="flex items-center text-gray-300">
            <CheckIcon />
            <span>{feature}</span>
        </li>
    );
}