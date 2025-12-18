"use client"

import { useEffect, useState } from "react"

const DEFAULT_VIDEO_ID = "J__BajhUv1w"

const Video = ({ videoId = DEFAULT_VIDEO_ID }: { videoId?: string }) => {
    const [embeddable, setEmbeddable] = useState<boolean | null>(null)

    useEffect(() => {
        let mounted = true
        const checkEmbed = async () => {
            try {
                const res = await fetch(
                    `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
                )
                if (!mounted) return
                setEmbeddable(res.ok)
            } catch (e) {
                if (!mounted) return
                setEmbeddable(false)
            }
        }
        checkEmbed()
        return () => {
            mounted = false
        }
    }, [videoId])

    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&origin=${encodeURIComponent(
        origin
    )}`

    return (
        <div className="rounded-2xl overflow-hidden shadow-lg relative">
            {embeddable === null && (
                <div className="w-full h-[400px] flex items-center justify-center bg-gray-100 text-gray-600">
                    Cargando video...
                </div>
            )}

            {embeddable === true && (
                <div className="w-full h-[400px]">
                    <iframe
                        className="w-full h-full object-cover"
                        src={embedSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        allowFullScreen
                    />
                </div>
            )}

            {embeddable === false && (
                <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-[400px] relative"
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 text-black rounded-full p-3 shadow-lg">
                            Ver en YouTube
                        </div>
                    </div>
                </a>
            )}
        </div>
    )
}

export default Video