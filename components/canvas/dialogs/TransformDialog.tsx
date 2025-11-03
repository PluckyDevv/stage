"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TransformControls } from "@/components/controls/TransformControls";
import { useCanvas } from "@/hooks/useCanvas";

interface TransformDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TransformDialog({ open, onOpenChange }: TransformDialogProps) {
  const { selectedObject } = useCanvas();

  // Close dialog if object is deselected
  useEffect(() => {
    if (open && !selectedObject) {
      onOpenChange(false);
    }
  }, [open, selectedObject, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900">Transform Object</DialogTitle>
        </DialogHeader>
        <div className="py-2">
          <TransformControls />
        </div>
      </DialogContent>
    </Dialog>
  );
}

