import PrimaryHeading from "@/components/ui/PrimaryHeading";

export const metadata = {
    title: 'Product List',
    description: 'Lotus Store Product List'
}

const ProductLayout = ({ children }) => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto py-6 px-4">

                {children}
                </div>
        </section>
    )
    
}
export default ProductLayout;