import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import useStore from "@/store";
import { toast } from "sonner";


export function ResetWishlistDialog() {
    const { resetFavorite } = useStore();
    
    const handleResetCart = () => {    
        resetFavorite();
        toast.success("Wishlist reset successfully!");
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="link" className="hoverEffect text-xs font-medium text-muted-foreground hover:text-destructive underline underline-offset-2 cursor-pointer">Clear Wishlist</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your favourite items from your wishlist.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleResetCart} className="bg-destructive text-accent-foreground">Reset</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
