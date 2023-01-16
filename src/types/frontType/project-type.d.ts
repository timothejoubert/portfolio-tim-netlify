// PROJECT //

interface ProjectResponse extends NodeType {
    id: number
    slug: string
    title: string
    date: string
    metaDescription?: string
    description?: string
    isNew?: boolean
    promote?: boolean
    thumbnail: ImageAttributes | string
    gallery?: string[]
    projectTags: string[]
    links?: Link[]
}

interface ProjectContent extends NodeType {
    id: number
    slug: string
    title: string
    date: string
    metaDescription?: string
    description?: string
    isNew?: boolean
    promote?: boolean
    thumbnail: ImageAttributes | string
    gallery?: string[]
    projectTags: string[]
    links?: Link[]
}

interface TagResponse {
    id: number
    name: string
}

interface Tag {
    name: string
    slug: string
}

interface Link {
    id: number
    label: string | null
    url: string
}
