import { getRandomInt, slugify } from '~/utils/functions'
import TAG_LABELS from '~/data/filters'

const getRandomTags = () => {
    return [...Array(getRandomInt(1, 4)).keys()].map(() => {
        return TAG_LABELS[Math.floor(Math.random() * TAG_LABELS.length)]
    })
}

const getRandomTagsInput = () => {
    return [...Array(getRandomInt(1, 4)).keys()].map(() => {
        const label = TAG_LABELS[Math.floor(Math.random() * TAG_LABELS.length)]
        return { name: label, slug: slugify(label), id: Math.ceil(Math.random() * 100) }
    })
}

const isPromoted = () => {
    return Math.random() > 0.2
}

const FALLBACK_LINK = [{ id: Math.ceil(Math.random() * 100), url: 'https://google.com', label: 'lien du projet' }]

const PROJECTS_DATA: ProjectContent[] = [
    {
        '@type': 'project',
        id: 1,
        slug: 'projet-1',
        title: 'Projet 1',
        date: '2022',
        promote: isPromoted(),
        metaDescription: 'Projet 1 - Méta description présente dans la recherche google',
        description:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
        thumbnail: {
            name: 'fontimate-01-thumbnail.png',
            alternativeText: 'fontimate-01-thumbnail.png',
            caption: 'fontimate-01-thumbnail.png',
            width: 1212,
            height: 1282,
            formats: null,
            hash: 'fontimate_01_thumbnail_25237b69af',
            ext: '.png',
            mime: 'image/png',
            size: 55.83,
            url: '/uploads/fontimate_01_thumbnail_25237b69af.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-10-05T21:12:23.019Z',
            updatedAt: '2022-10-05T21:12:23.019Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
    {
        '@type': 'project',
        id: 2,
        slug: 'projet-2',
        title: 'Projet 2',
        date: '2022',
        promote: isPromoted(),
        metaDescription: 'Projet 2 - Méta description présente dans la recherche google.',
        description: undefined,
        thumbnail: {
            name: 'fontimate-01-thumbnail.png',
            alternativeText: 'fontimate-01-thumbnail.png',
            caption: 'fontimate-01-thumbnail.png',
            width: 1212,
            height: 1282,
            formats: null,
            hash: 'fontimate_01_thumbnail_25237b69af',
            ext: '.png',
            mime: 'image/png',
            size: 55.83,
            url: '/uploads/fontimate_01_thumbnail_25237b69af.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-10-05T21:12:23.019Z',
            updatedAt: '2022-10-05T21:12:23.019Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
    {
        '@type': 'project',
        id: 3,
        slug: 'projet-3',
        title: 'Projet 3',
        date: '2022',
        promote: isPromoted(),
        metaDescription: 'Projet 3 - Méta description présente dans la recherche google.',
        description:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
        thumbnail: {
            name: 'fontimate-2.gif',
            alternativeText: 'fontimate-2.gif',
            caption: 'fontimate-2.gif',
            width: null,
            height: null,
            formats: null,
            hash: 'fontimate_2_ddfd16da19',
            ext: '.gif',
            mime: 'image/gif',
            size: 519.43,
            url: '/uploads/fontimate_2_ddfd16da19.gif',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-10-08T13:16:05.115Z',
            updatedAt: '2022-10-08T13:16:05.115Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
    {
        '@type': 'project',
        id: 4,
        slug: 'projet-4',
        title: 'Projet 4',
        date: '2022',
        promote: isPromoted(),
        metaDescription: 'Projet 4 - Méta description présente dans la recherche google',
        description:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
        thumbnail: {
            name: 'image 3.jpg',
            alternativeText: 'image 3.jpg',
            caption: 'image 3.jpg',
            width: 493,
            height: 318,
            formats: null,
            hash: 'image_3_5a0fc7204a',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 41.18,
            url: '/uploads/image_3_5a0fc7204a.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-11-02T21:33:11.599Z',
            updatedAt: '2022-11-02T21:33:11.599Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
    {
        '@type': 'project',
        id: 5,
        slug: 'tous-moche-!',
        title: 'Tous moche !',
        date: '2022',
        promote: isPromoted(),
        metaDescription:
            'Projet 5 | Description de la page présente sous le titre de la page dans la recherche google.',
        description:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
        thumbnail: {
            name: 'image 4.jpg',
            alternativeText: 'image 4.jpg',
            caption: 'image 4.jpg',
            width: 459,
            height: 316,
            formats: null,
            hash: 'image_4_49811fa43a',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 20.72,
            url: '/uploads/image_4_49811fa43a.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-11-02T21:34:56.150Z',
            updatedAt: '2022-11-02T21:34:56.150Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
    {
        '@type': 'project',
        id: 6,
        slug: 'prcht',
        title: 'Prcht',
        date: '2022',
        promote: isPromoted(),
        metaDescription:
            'Projet 6 | Description de la page présente sous le titre de la page dans la recherche google.',
        description:
            'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
        thumbnail: {
            name: 'image 2.jpg',
            alternativeText: 'image 2.jpg',
            caption: 'image 2.jpg',
            width: 300,
            height: 424,
            formats: null,
            hash: 'image_2_bcdcab69c0',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 29.57,
            url: '/uploads/image_2_bcdcab69c0.jpg',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-11-02T22:36:13.332Z',
            updatedAt: '2022-11-02T22:36:13.332Z',
        },
        projectTags: [...getRandomTags()],
        links: FALLBACK_LINK,
    },
]

export default PROJECTS_DATA
