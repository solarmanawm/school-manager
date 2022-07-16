export function difference<T>(source1: T, source2: Partial<T>) {
    const diff: Partial<T> = {}
    const keys1: string[] = Object.keys(source1)
    const keys2: string[] = Object.keys(source2)

    for (const key of keys1) {
        if (keys2.includes(key) && source1[key as keyof T] !== source2[key as keyof Partial<T>]) {
            diff[key as keyof Partial<T>] = source2[key as keyof Partial<T>]
        }
    }

    return diff
}
