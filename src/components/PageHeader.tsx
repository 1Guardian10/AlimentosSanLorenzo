interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="pt-24 bg-linear-to-b from-blue-900 to-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-blue-100">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
