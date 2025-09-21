interface ArticleSectionProps {
    heading: string;
    subheading?: string;
    description: React.ReactNode;
}

export default function ArticleSection({
    heading,
    subheading,
    description,
}: ArticleSectionProps){
    return(
        <div className="text-center space-y-2 md:space-y-5 my-6 mt-10 md:my-16 px-4 text-pretty">
            <h2 className="text-xl md:text-3xl text-purple-dark font-semibold md:leading-10 whitespace-pre-line">{heading}<span className="md:block">{subheading}</span></h2>
            <p className="text-xxs md:text-xs md:leading-5 max-w-2xl mx-auto">{description}</p>
        </div>
    );
}