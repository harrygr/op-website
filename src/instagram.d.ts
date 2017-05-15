declare namespace Instagram {
    interface User {
        id: string
        full_name: string
        profile_picture: string
        username: string
    }

    interface Image {
        width: number
        height: number
        url: string
    }

    interface Caption {
        id: string
        text: string
        created_time: string
        from: User
    }

    interface Media {
        id: string
        user: User
        images: {
            thumbnail: Image
            low_resolution: Image
            standard_resolution: Image
        }
        created_time: string
        caption: Caption
        link: string
        tags: string[]
    }
}
