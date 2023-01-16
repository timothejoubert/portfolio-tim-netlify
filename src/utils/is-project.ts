const necessaryProjectKey = ['slug', 'title', 'thumbnail']

// Type Guards project
export default function isValidProject(object: unknown): object is ProjectResponse {
    return necessaryProjectKey.every((key) => key in (object as any))
}
