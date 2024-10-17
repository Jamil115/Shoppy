import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink
} from "@/components/ui/pagination"
import { FaArrowRight } from "react-icons/fa"

export function PaginationComp() {
    return (
        <div className="mb-10">
            <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink href="#" isActive className="font-bold bg-[#098077] text-white">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="font-bold bg-[#098077] text-white">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="font-bold bg-[#098077] text-white"><FaArrowRight /></PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        </div>
    )
}
