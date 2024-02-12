import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/copt";

export default async function getSession() {
    return await getServerSession(authOptions);
}