// lib/fakeApi.ts

interface Category {
    id: number;
    name: string;
    slug: string;
    images: string[];
}

export const categories: Category[] = [
    {
        id: 1,
        name: "Biệt thự",
        slug: "biet-thu",
        images: [
            "/demo-home/BIETTHU/1.jpg",
            "/demo-home/BIETTHU/2.jpg",
            "/demo-home/BIETTHU/3.jpg",
            "/demo-home/BIETTHU/4.jpg",
            "/demo-home/BIETTHU/5.jpg",
            "/demo-home/BIETTHU/6.jpg",
            "/demo-home/BIETTHU/7.jpg",
            "/demo-home/BIETTHU/8.jpg",
            "/demo-home/BIETTHU/9.jpg",
            "/demo-home/BIETTHU/10.jpg",
            "/demo-home/BIETTHU/11.jpg",
            "/demo-home/BIETTHU/12.jpg",
            "/demo-home/BIETTHU/13.jpg",
            "/demo-home/BIETTHU/14.jpg",
            "/demo-home/BIETTHU/15.jpg",
            "/demo-home/BIETTHU/16.jpg",
            "/demo-home/BIETTHU/17.jpg",
            "/demo-home/BIETTHU/18.jpg",
            "/demo-home/BIETTHU/19.jpg",
            "/demo-home/BIETTHU/2.jpg",
            "/demo-home/BIETTHU/21.jpg",
            "/demo-home/BIETTHU/22.jpg",
            "/demo-home/BIETTHU/23.jpg",
            "/demo-home/BIETTHU/24.jpg",
            "/demo-home/BIETTHU/25.jpg",
            "/demo-home/BIETTHU/26.jpg",
            "/demo-home/BIETTHU/27.jpg",
            "/demo-home/BIETTHU/28.jpg",
            "/demo-home/BIETTHU/29.jpg",
        ],
    },
    {
        id: 2,
        name: "Nhà đẹp 1 tầng",
        slug: "nha-dep-1-tang",
        images: [
            "/demo-home/NHA1TANG/1.jpg",
            "/demo-home/NHA1TANG/2.jpg",
            "/demo-home/NHA1TANG/3.jpg",
            "/demo-home/NHA1TANG/4.jpg",
            "/demo-home/NHA1TANG/5.jpg",
            "/demo-home/NHA1TANG/6.jpg",
        ],
    },
    {
        id: 3,
        name: "Nhà đẹp 2 tầng",
        slug: "nha-dep-2-tang",
        images: [
            "/demo-home/NHA2TANG/1.jpg",
            "/demo-home/NHA2TANG/2.jpg",
            "/demo-home/NHA2TANG/3.jpg",
            "/demo-home/NHA2TANG/4.jpg",
            "/demo-home/NHA2TANG/5.jpg",
            "/demo-home/NHA2TANG/6.jpg",
            "/demo-home/NHA2TANG/7.jpg",
            "/demo-home/NHA2TANG/8.jpg",
            "/demo-home/NHA2TANG/9.jpg",
        ],
    },
    {
        id: 4,
        name: "Nhà đẹp 3 tầng",
        slug: "nha-dep-3-tang",
        images: [
            "/demo-home/NHA3TANG/1.jpg",
            "/demo-home/NHA3TANG/2.jpg",
            "/demo-home/NHA3TANG/3.jpg",
            "/demo-home/NHA3TANG/4.jpg",
            "/demo-home/NHA3TANG/5.jpg",
            "/demo-home/NHA3TANG/6.jpg",
            "/demo-home/NHA3TANG/7.jpg",
            "/demo-home/NHA3TANG/8.jpg",
        ],
    },
    {
        id: 5,
        name: "Nhà đẹp 4 tầng",
        slug: "nha-dep-4-tang",
        images: [
            "/demo-home/NHA4TANG/1.jpg",
            "/demo-home/NHA4TANG/2.jpg",
            "/demo-home/NHA4TANG/3.jpg",
            "/demo-home/NHA4TANG/4.jpg",
            "/demo-home/NHA4TANG/5.jpg",
            "/demo-home/NHA4TANG/6.jpg",
            "/demo-home/NHA4TANG/7.jpg",
            "/demo-home/NHA4TANG/8.jpg",
            "/demo-home/NHA4TANG/9.jpg",
            "/demo-home/NHA4TANG/10.jpg",
        ],
    },
    // Thêm các danh mục khác nếu cần
];

// Hàm để lấy danh sách chuyên mục
export const getCategories = () => {
    return categories;
};

// Hàm để lấy danh sách hình ảnh theo slug của chuyên mục
export const getImagesByCategory = (slug: string) => {
    return categories.find((category) => category.slug === slug)?.images || [];
};
