import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PageInfo } from "@/types/pagination";

interface PaginationProps {
    pageInfo: PageInfo;
    onPageChange: (page: number) => void;
}

const PaginationDemo: React.FC<PaginationProps> = ({
    pageInfo,
    onPageChange,
}) => {
    const { current_page, last_page, links } = pageInfo;

    const handlePageChange = (url: string | null) => {
        if (url) {
            const urlParams = new URLSearchParams(url.split("?")[1]);
            const page = parseInt(urlParams.get("page") || "1", 10);
            onPageChange(page);
        }
    };

    return (
        <Pagination className="w-full my-8">
            <PaginationContent>
                <PaginationItem
                    className={`${
                        current_page === 1
                            ? "opacity-50 pointer-events-none text-lg text-black"
                            : ""
                    } text-lg text-[#424040]`}
                >
                    <PaginationPrevious
                        onClick={() => handlePageChange(links[0].url)}
                    />
                </PaginationItem>

                {links.map((link, index) => {
                    if (
                        link.label === "&laquo; Trước" ||
                        link.label === "Tiếp &raquo;"
                    )
                        return null;

                    return (
                        <PaginationItem
                            key={index}

                            // className={`${
                            //   link.active ? 'bg-[#007bff] text-white' : 'text-[#424040]'
                            // }`}
                        >
                            <PaginationLink
                                onClick={() => handlePageChange(link.url)}
                                className={`${
                                    link.active
                                        ? "text-black"
                                        : "text-[#424040]"
                                } text-lg`}
                                isActive={link.active}
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem
                    className={`${
                        current_page === last_page
                            ? "opacity-50 pointer-events-none text-lg text-black"
                            : ""
                    } text-lg text-[#424040]`}
                >
                    <PaginationNext
                        onClick={() =>
                            handlePageChange(links[links.length - 1].url)
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationDemo;
