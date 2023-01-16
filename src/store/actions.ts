import type { ActionTree, ActionContext } from 'vuex'
import ABOUT_INFO from '~/../content/site/about.json'
import MutationType from '~/constants/mutation-type'
import { RootState } from '~/types/store'
import ABOUT_DATA from '~/data/about-data'
import PROJECTS_DATA from '~/data/projects-data'
import isValidProject from '~/utils/is-project'
import { parseTags } from '~/utils/parse-api-response'
// import { Context, NuxtError } from '@nuxt/types'

const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit({ commit }: ActionContext<RootState, RootState>) {
        const ValidatedProjects: ProjectResponse[] = []
        try {
            const projects = await this.$content('projects').fetch()

            projects.forEach((project: unknown) => {
                if (isValidProject(project)) {
                    ValidatedProjects.push(project)
                } else {
                    console.log(` ${project} haven't all necessary data`)
                }
            })
            commit(MutationType.PROJECTS_DATA, ValidatedProjects)
            commit(MutationType.PROJECTS_TAGS, parseTags(ValidatedProjects))
            commit(MutationType.ABOUT_DATA, ABOUT_INFO)
        } catch (error) {
            console.log('cant fetch projects md files', error)
            commit(MutationType.PROJECTS_DATA, PROJECTS_DATA)
            commit(MutationType.ABOUT_DATA, ABOUT_DATA)
        }
    },
}

export default actions
