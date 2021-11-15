import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'db/projects')

export function getSortedProjectsData() {
    // Get file names under /db/projects
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        }
    })
    // Sort projects by date
    return allProjectsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
    })
}

export function getAllProjectIds() {
    const fileNames = fs.readdirSync(projectsDirectory)
    return fileNames.map(fileNames => {
        return {
            params: {
                id: fileNames.replace(/\.md$/, '')
            }
        }
    })
}

export function getProjectData(id) {
    const fullPath = path.join(projectsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
    id,
    ...matterResult.data
    }

}