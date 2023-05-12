import { Tab } from "@headlessui/react";

interface ComponentsListProps {
  propertyName?: string;
}

export default function ComponentsList({}: ComponentsListProps) {
  return (
    <div className="text-white">
      <h2>ComponentsList</h2>
      <h3>Tabs</h3>
      <Tab.Group>
        <Tab.List>
          <Tab className="p-4 border-2 border-white">Tab Section</Tab>
          <Tab className="p-4 border-2 border-white">Tab Description</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="p-4">This is section for tab.</Tab.Panel>
          <Tab.Panel className="p-4">
            Tab is a Headless UI component. Tab has following components
            `Tab.Group`,`Tab.List`,`Tab`,`Tab.Panels`,`Tab.Panel`.
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
