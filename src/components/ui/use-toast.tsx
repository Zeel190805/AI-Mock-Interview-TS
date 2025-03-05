type ToastProps = {
    title?: string
    description?: string
    variant?: "default" | "destructive"
  }
  
  export function toast({ title, description, variant = "default" }: ToastProps) {
    // This is a simplified implementation
    // In a real app, you would use a proper toast library
    alert(`${title}\n${description}`)
  }
  
  