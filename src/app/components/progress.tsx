interface ProgressBarProps {
    progress: number; 
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
    return (
        <div className="w-full mt-6">
            <div className={`h-2 rounded-full ${progress >= 100 ? 'bg-green-500' : 'bg-yellow-400'}`} style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
