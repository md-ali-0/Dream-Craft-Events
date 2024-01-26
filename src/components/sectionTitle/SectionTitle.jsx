const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="py-3">
            <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-red-500  tracking-widest uppercase">{subHeading}</h4>
            <h3 className="text-4xl text-dark_01 font-semibold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;