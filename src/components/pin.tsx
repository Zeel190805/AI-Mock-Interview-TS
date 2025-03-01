import { Interview } from "@/types"
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Pencil, Sparkles, Trash2 } from "lucide-react";
import { collection, doc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { toast } from "sonner";


interface InterviewPinProps {
    interview: Interview;
    onMockPage?: boolean;
}

export const InterviewPin = ({
    interview,
    onMockPage = false,
}: InterviewPinProps) => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { userId } = useAuth();

    const onDelete = async () => {
        setLoading(true);

        try {
            const interviewRef = doc(db, "interviews", interview.id);
            const userAnswerQuery = query(
                collection(db, "userAnswers"),
                where("userId", "==", userId),
                where("mockIdRef", "==", interview.id)
            );

            // get all matching user answer
            const querySnap = await getDocs(userAnswerQuery);

            // initialize the firebase batch

            const batch = writeBatch(db);

            // add delete -> interview batch

            batch.delete(interviewRef);

            querySnap.forEach((docRef) => batch.delete(docRef.ref));

            // commit

            await batch.commit();

            toast("Success", { description: "Your interview has been removed" });
        } catch (error) {
            console.log(error);
            toast("Error", {
                description: "Something went wrong!. Please try again later",
            });
        } finally {
            setLoading(false);
        }
    };



    return <Card className="p-4 rounded-xl shadow-none hover:shadow-lg shadow-gray-100 cursor-pointer transition-all space-y-4">
        <CardTitle className="text-xl">{interview?.position}</CardTitle>
        <CardDescription>{interview?.description}</CardDescription>
        <div className="w-full flex items-center gap-2 flex-wrap">
            {interview.techStack.split(",").map((word, index) => (
                <Badge
                    key={index}
                    variant={"outline"}
                    className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
                >
                    {word}
                </Badge>
            ))}

            <CardFooter className={cn(
                "w-full flex items-center p-0",
                onMockPage ? "justify-end" : "justify-between"
            )}>
                <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
                    {`${new Date(interview.createdAt.toDate()).toLocaleDateString("en-US", {
                        dateStyle: "long",
                    })} - ${new Date(interview.createdAt.toDate()).toLocaleTimeString(
                        "en-US",
                        {
                            timeStyle: "short",
                        }
                    )}`}
                </p>

                <div className="flex items-center justify-center ">
                    <TooltipButton
                        content="Edit"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/${interview.id}`, { replace: true });
                        }}
                        disbaled={false}
                        buttonClassName="hover:text-sky-500"
                        icon={<Eye />}
                        loading={false}
                    />

                    <TooltipButton
                        content="Delete"
                        buttonVariant={"ghost"}
                        onClick={onDelete}
                        disbaled={false}
                        buttonClassName="hover:text-red-500"
                        icon={<Trash2 />}
                        loading={loading}
                    />

                    <TooltipButton
                        content="Feedback"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/feedback/${interview.id}`, { replace: true });
                        }}
                        disbaled={false}
                        buttonClassName="hover:text-emerald-500"
                        icon={<Newspaper />}
                        loading={false}
                    />

                    <TooltipButton
                        content="Start"
                        buttonVariant={"ghost"}
                        onClick={() => {
                            navigate(`/generate/interview/${interview.id}`, { replace: true });
                        }}
                        disbaled={false}
                        buttonClassName="hover:text-sky-500"
                        icon={<Sparkles />}
                        loading={false}
                    />
                </div>
            </CardFooter>
        </div>

    </Card>
}
