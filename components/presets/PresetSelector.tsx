'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useImageStore } from '@/lib/store';
import { presets, type PresetConfig } from '@/lib/constants/presets';
import { Sparkles } from 'lucide-react';
import { getBackgroundStyle, getBackgroundCSS } from '@/lib/constants/backgrounds';
import { cn } from '@/lib/utils';

export function PresetSelector() {
  const {
    uploadedImageUrl,
    setAspectRatio,
    setBackgroundConfig,
    setBackgroundType,
    setBackgroundValue,
    setBackgroundOpacity,
    setBorderRadius,
    setBackgroundBorderRadius,
    setImageOpacity,
    setImageScale,
    setImageBorder,
    setImageShadow,
  } = useImageStore();

  const [open, setOpen] = React.useState(false);

  const applyPreset = React.useCallback((preset: PresetConfig) => {
    // Set all parameters from the preset
    setAspectRatio(preset.aspectRatio);
    setBackgroundConfig(preset.backgroundConfig);
    setBackgroundType(preset.backgroundConfig.type);
    setBackgroundValue(preset.backgroundConfig.value);
    setBackgroundOpacity(preset.backgroundConfig.opacity ?? 1);
    setBorderRadius(preset.borderRadius);
    setBackgroundBorderRadius(preset.backgroundBorderRadius);
    setImageOpacity(preset.imageOpacity);
    setImageScale(preset.imageScale);
    setImageBorder(preset.imageBorder);
    setImageShadow(preset.imageShadow);
    
    // Close the popover after applying
    setOpen(false);
  }, [
    setAspectRatio,
    setBackgroundConfig,
    setBackgroundType,
    setBackgroundValue,
    setBackgroundOpacity,
    setBorderRadius,
    setBackgroundBorderRadius,
    setImageOpacity,
    setImageScale,
    setImageBorder,
    setImageShadow,
  ]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={!uploadedImageUrl}
          variant="outline"
          size="sm"
          className="w-full h-9 min-w-0 justify-start gap-2 rounded-lg bg-background hover:bg-accent text-foreground border border-border hover:border-border/80 shadow-none hover:shadow-sm transition-all duration-200 font-medium text-xs px-3 overflow-hidden"
        >
          <Sparkles className="size-3.5 shrink-0" />
          <span className="truncate min-w-0">Presets</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="p-4">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-foreground">Quick Presets</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Apply pre-configured styles instantly
            </p>
          </div>
          
          <div className="space-y-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={cn(
                  'w-full text-left p-3 rounded-lg border transition-all',
                  'hover:bg-accent hover:border-border/80',
                  'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                  'group'
                )}
              >
                <div className="flex items-start gap-3">
                  {/* Preview thumbnail */}
                  <div
                    className="w-16 h-16 rounded-md overflow-hidden border border-border shrink-0 relative"
                    style={getBackgroundCSS(preset.backgroundConfig)}
                  >
                    {/* Overlay for radial gradient effect on image backgrounds */}
                    {preset.backgroundConfig.type === 'image' && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(255, 204, 112, 0.3) 0%, rgba(200, 80, 192, 0.2) 50%, rgba(65, 88, 208, 0.1) 100%)',
                        }}
                      />
                    )}
                    <div className="w-full h-full flex items-center justify-center relative z-10">
                      <div
                        className="w-12 h-12 rounded"
                        style={{
                          backgroundColor: preset.backgroundConfig.type === 'image' 
                            ? 'rgba(255, 255, 255, 0.4)' 
                            : 'rgba(255, 255, 255, 0.3)',
                          borderRadius: `${preset.borderRadius}px`,
                          boxShadow: preset.imageShadow.enabled
                            ? `${preset.imageShadow.offsetX}px ${preset.imageShadow.offsetY}px ${preset.imageShadow.blur}px ${preset.imageShadow.spread}px ${preset.imageShadow.color}`
                            : 'none',
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Preset info */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground group-hover:text-foreground">
                      {preset.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {preset.description}
                    </div>
                    <div className="mt-2 flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                        {preset.aspectRatio === '1_1' ? 'Square' :
                         preset.aspectRatio === '9_16' ? 'Story' :
                         preset.aspectRatio === '16_9' ? 'Landscape' :
                         preset.aspectRatio === '4_5' ? 'Portrait' :
                         preset.aspectRatio}
                      </span>
                      {preset.borderRadius > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                          Rounded
                        </span>
                      )}
                      {preset.imageShadow.enabled && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
                          Shadow
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {!uploadedImageUrl && (
            <div className="mt-4 p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground text-center">
                Upload an image to use presets
              </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

