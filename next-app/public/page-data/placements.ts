type blog = {
    header: string,
    contents: string[]
}
type keyValue = {
    header: string,
    content: string
}
type placement = {
    layoutMeta: {
        backgroundImagesName: string[],
        colors: {
            main: string,
            dark: string,
            light: string
        }
    },
    departmentMeta: {
        name: string,
        syllabus: string
    }[],
    strength: number,
    percents: [
        keyValue, keyValue, keyValue, keyValue
    ],
    bullets: blog[],
    achievements: blog[],
    statistics: {
        year: number,
        range: [number, number]
        placed: number,
        meta: [number, number, number]
    },
    patents: {
        header: string,
        contents: string[],
        link: string
    }[]
}

export const placementDatas: placement[] = []
