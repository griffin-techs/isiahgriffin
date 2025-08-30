import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, Maximize2, Minimize2, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Editor from '@monaco-editor/react';

interface CodeExample {
  title: string;
  description: string;
  html?: string;
  css?: string;
  javascript?: string;
  language: 'javascript' | 'html' | 'css' | 'react';
}

interface CodePlaygroundProps {
  examples: CodeExample[];
  className?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ examples, className }) => {
  const [activeExample, setActiveExample] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentExample = examples[activeExample];

  const runCode = () => {
    if (!iframeRef.current || !currentExample) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Code Preview</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
              background: hsl(var(--background));
              color: hsl(var(--foreground));
            }
            ${currentExample.css || ''}
          </style>
        </head>
        <body>
          ${currentExample.html || ''}
          <script>
            try {
              ${currentExample.javascript || ''}
            } catch (error) {
              document.body.innerHTML += '<div style="color: red; padding: 10px; border: 1px solid red; margin: 10px 0; border-radius: 4px;">Error: ' + error.message + '</div>';
            }
          </script>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;

    return () => URL.revokeObjectURL(url);
  };

  const copyToClipboard = async (code: string, type: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStates({ ...copiedStates, [type]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [type]: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  useEffect(() => {
    runCode();
  }, [activeExample, currentExample]);

  return (
    <Card className={cn('overflow-hidden glass-effect border-border/50', className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gradient">
              Live Code Playground
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Interactive code examples you can modify and run
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="hover-glow"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Example Selector */}
        {examples.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {examples.map((example, index) => (
              <Button
                key={index}
                variant={activeExample === index ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveExample(index)}
                className={cn(
                  'hover-glow',
                  activeExample === index && 'bg-gradient-primary'
                )}
              >
                {example.title}
              </Button>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <h4 className="font-medium text-foreground">{currentExample.title}</h4>
          <p className="text-sm text-muted-foreground">{currentExample.description}</p>
          <Badge variant="secondary" className="bg-surface-hover border-border">
            {currentExample.language}
          </Badge>
        </div>

        <div className={cn(
          'grid gap-4 transition-all duration-300',
          isFullscreen ? 'grid-cols-1' : 'lg:grid-cols-2'
        )}>
          {/* Code Editor */}
          <div className="space-y-4">
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-surface border-border">
                <TabsTrigger value="html" disabled={!currentExample.html}>HTML</TabsTrigger>
                <TabsTrigger value="css" disabled={!currentExample.css}>CSS</TabsTrigger>
                <TabsTrigger value="javascript" disabled={!currentExample.javascript}>JS</TabsTrigger>
              </TabsList>
              
              {currentExample.html && (
                <TabsContent value="html" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">HTML</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(currentExample.html!, 'html')}
                    >
                      {copiedStates.html ? <Check size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                  <div className="border border-border rounded-md overflow-hidden">
                    <Editor
                      height="200px"
                      language="html"
                      value={currentExample.html}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        readOnly: true,
                        scrollBeyondLastLine: false,
                      }}
                    />
                  </div>
                </TabsContent>
              )}

              {currentExample.css && (
                <TabsContent value="css" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CSS</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(currentExample.css!, 'css')}
                    >
                      {copiedStates.css ? <Check size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                  <div className="border border-border rounded-md overflow-hidden">
                    <Editor
                      height="200px"
                      language="css"
                      value={currentExample.css}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        readOnly: true,
                        scrollBeyondLastLine: false,
                      }}
                    />
                  </div>
                </TabsContent>
              )}

              {currentExample.javascript && (
                <TabsContent value="javascript" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">JavaScript</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(currentExample.javascript!, 'javascript')}
                    >
                      {copiedStates.javascript ? <Check size={14} /> : <Copy size={14} />}
                    </Button>
                  </div>
                  <div className="border border-border rounded-md overflow-hidden">
                    <Editor
                      height="200px"
                      language="javascript"
                      value={currentExample.javascript}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        readOnly: true,
                        scrollBeyondLastLine: false,
                      }}
                    />
                  </div>
                </TabsContent>
              )}
            </Tabs>

            <Button 
              onClick={runCode} 
              size="sm" 
              className="w-full bg-gradient-primary hover-glow"
            >
              <Play size={16} className="mr-2" />
              Run Code
            </Button>
          </div>

          {/* Preview */}
          <div className="space-y-2">
            <span className="text-sm font-medium">Preview</span>
            <div className="border border-border rounded-md overflow-hidden bg-background">
              <iframe
                ref={iframeRef}
                title="Code Preview"
                className={cn(
                  'w-full border-0 bg-background',
                  isFullscreen ? 'h-96' : 'h-64'
                )}
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodePlayground;