export const variantsEliminar = {
    open: () => ({
        clipPath: `circle(200px at 7px 21px)`,
        zIndex: 10,
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: "circle(13px at 16px 21.5px)",
        zIndex: 20,
        transition: {
            type: "spring",
            stiffness: 130,
            damping: 30
        }
    }
}

export const variantsEditar = {
    open: () => ({
        clipPath: `circle(200px at 150px 100px)`,
        zIndex: 10,
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2,
        }
    }),
    closed: {
        clipPath: "circle(13px at 164px 21.5px)",
        zIndex: 20,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 30
        }
    }
}