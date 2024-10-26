// Định nghĩa Photo tương tự Post
export interface Photo {
    id: number;
    name: string; // URL của ảnh
    caption: string | null; // Caption của ảnh, có thể là null
}

// Định nghĩa Pagination cho Photo tương tự PostPagination
export interface PhotoPagination {
    current_page: number;
    data: Photo[]; // Danh sách các đối tượng ảnh
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: { url: string | null; label: string; active: boolean }[]; // Link phân trang
    next_page_url: string | null; // URL của trang tiếp theo, có thể null
    path: string;
    per_page: number;
    prev_page_url: string | null; // URL của trang trước, có thể null
    to: number;
    total: number; // Tổng số ảnh
}

// Định nghĩa PhotoItemProps tương tự PostItemProps
export interface PhotoItemProps {
    id: number;
    name: string; // URL của ảnh
    caption: string | null; // Caption của ảnh, có thể null
}

// Định nghĩa PhotoListProps tương tự PostListProps
export interface PhotoListProps {
    photos: Photo[]; // Danh sách các ảnh
}

// Định nghĩa chi tiết Photo tương tự PostDetail
export interface PhotoDetail {
    id: number;
    name: string; // URL của ảnh
    caption: string | null; // Caption của ảnh
    related: Photo[]; // Danh sách các ảnh liên quan
}
