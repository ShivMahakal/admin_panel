import Image from "next/image";
import Link from 'next/link';

function CompanyLogo(){
    return(
        <Link href={"/dashboard"}>
           <Image
                width={196}
                height={34}
                alt="Logo"
                src="/assets/images/logo.svg"
            />
        </Link>
    )
}
export default CompanyLogo;