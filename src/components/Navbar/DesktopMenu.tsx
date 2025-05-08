import { NAVBAR_CONTENT } from '@/common/constants';
import { DesktopMenuItem } from './DesktopMenuItem';

export function DesktopMenu({ onItemClick }: { onItemClick: (id: string) => void }) {
    return (
        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {NAVBAR_CONTENT.menuItems.map((item, index) => (
                <DesktopMenuItem
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={onItemClick}
                />
            ))}
        </div>
    );
}