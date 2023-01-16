import { slugify } from '~/utils/functions'

function parseTags(projects: ProjectResponse[] | undefined): InputParameter[] | null {
    if (!projects) return null

    const tagInputs: InputParameter[] = []
    projects?.forEach((project: ProjectResponse) => {
        project.projectTags?.forEach((tag: string) => {
            if (tagInputs?.filter((input) => input?.label === tag)?.length) return
            tagInputs.push({
                name: 'tag-' + slugify(tag),
                label: tag,
                type: 'checkbox',
                checked: false,
                icon: 'validate',
            } as InputParameter)
        })
    })

    return tagInputs
}

function parseAbout(response: undefined | StrapiWebResponse): AboutBlock | undefined {
    const attributes = response?.data?.attributes as StrapiAboutResponse
    if (!attributes) return
    const description = (JSON.parse(attributes.description) as RichText)?.blocks[0].data.text
    return {
        '@type': 'about',
        title: attributes.title,
        description,
        createdAt: attributes.createdAt,
        updatedAt: attributes.updatedAt,
        publishedAt: attributes.publishedAt,
        metaDescription: attributes.metaDescription,
        socials: attributes?.socials || null,
        sections: attributes?.sections || null,
    }
}

export { parseTags, parseAbout }
