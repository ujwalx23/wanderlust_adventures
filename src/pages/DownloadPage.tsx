
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Download, FileText } from 'lucide-react';

const DownloadPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1MVvUsLDiI96mr3b-fnTytaJ9iShFA8py/view?usp=drive_link");
    setIsOpen(false);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-6">
            Download Travel Resources
          </h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Access our comprehensive travel guides, destination checklists, and planning tools to make your Indian adventure perfect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col items-center">
              <FileText size={48} className="text-india-blue mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel Guide PDF</h3>
              <p className="text-gray-600 text-center mb-4">
                Our complete travel guide with tips, best times to visit, and cultural insights.
              </p>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-india-saffron hover:bg-india-marigold text-white">
                    <Download size={16} className="mr-2" /> Download PDF
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Download Travel Guide</DialogTitle>
                    <DialogDescription>
                      You're about to download our comprehensive travel guide for exploring India.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="mb-4">This guide includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Detailed information on top destinations</li>
                      <li>Cultural etiquette and local customs</li>
                      <li>Transportation tips and recommendations</li>
                      <li>Seasonal travel advice and packing guides</li>
                      <li>Local cuisine guide and food recommendations</li>
                      <li>Budget planning resources</li>
                    </ul>
                  </div>
                  <DialogFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-india-saffron hover:bg-india-marigold text-white" 
                      onClick={handleDownload}
                    >
                      Download PDF
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 flex flex-col items-center">
              <FileText size={48} className="text-india-green mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel Checklist</h3>
              <p className="text-gray-600 text-center mb-4">
                Essential packing list and pre-trip preparation checklist for India.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-india-green hover:bg-india-green/90 text-white">
                    <Download size={16} className="mr-2" /> Download Checklist
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Download Travel Checklist</DialogTitle>
                    <DialogDescription>
                      You're about to download our comprehensive travel checklist for your Indian adventure.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="mb-4">This checklist includes:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Essential documentation requirements</li>
                      <li>Season-specific packing lists</li>
                      <li>Health and medication recommendations</li>
                      <li>Electronics and adapters guide</li>
                      <li>Pre-departure to-do list</li>
                    </ul>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button 
                      className="bg-india-green hover:bg-india-green/90 text-white"
                      onClick={handleDownload}
                    >
                      Download Checklist
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="bg-india-blue/5 p-8 rounded-lg border border-india-blue/20">
            <h3 className="text-xl font-semibold mb-4 text-india-blue">Need More Resources?</h3>
            <p className="text-gray-600 mb-6">
              Our team is constantly creating new resources to help travelers explore India. 
              Subscribe to our newsletter to get notified when we release new guides.
            </p>
            <Link to="/#subscribe">
              <Button className="bg-india-blue hover:bg-india-blue/90">
                Subscribe Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DownloadPage;
