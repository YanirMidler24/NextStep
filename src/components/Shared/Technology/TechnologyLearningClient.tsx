"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

interface LearningResource {
  title: string;
  url: string; // יהיה פה שם פנימי כמו "nextjs" או "contact"
  type?: string;
}

export function TechnologyLearningClient({
  learningResources,
}: {
  learningResources: LearningResource[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const handleClick = () => {
    const goToContact = () => {
      const el = document.getElementById("contact");
      if (el) {
        const url = new URL(window.location.href);
        url.searchParams.set("package", 'שיעור פרטי');
        window.history.replaceState({}, "", url);
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    // אם אנחנו כבר בעמוד הראשי – רק גוללים
    if (pathname === "/") {
      goToContact();
    } else {
      // אם לא – ננווט ואז נגלול
      startTransition(() => {
        router.push("/");
        setTimeout(goToContact, 300); // מחכה שהקומפוננט ייטען
      });
    }
  };

  const isInternal = (url: string) => url === "contact" || !url.startsWith("http");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-gray-900 p-6 rounded-2xl shadow-md border border-purple-500/20"
    >
      <h2 className="text-2xl font-semibold text-purple-400 mb-4">
        📚 איפה מתחילים?
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-right">
        {learningResources.map((res) => (
          <li key={res.url}>
            {isInternal(res.url) ? (
              <button
                onClick={() => handleClick()}
                className="text-purple-400 hover:underline text-right"
              >
                {res.title}
              </button>
            ) : (
              <a
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                {res.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
