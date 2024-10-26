"use client"; // This makes the component a client-side component

import { SkeletonCard } from "@/components/skeleton-card";
import { useArticle } from "@/hooks/useArticle";
import { useParams } from "next/navigation";

const ArticleDetail = () => {
    const { id } = useParams();

    const { data: article, isPending, error } = useArticle(Number(id));
    console.log(article);
    if (isPending) return <SkeletonCard />;
    if (error) return <div>Error fetching article.</div>;
    if (!article) {
        return <div>article not found</div>;
    }
    return (
        <div className="container mx-auto py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <h1 className="text-gray-900 text-2xl title-font font-medium mb-1 uppercase leading-10">
                        {article.title}
                    </h1>
                    {/* <img src={article.thumb} className='w-full my-4' /> */}

                    <div
                        className="content-container"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
