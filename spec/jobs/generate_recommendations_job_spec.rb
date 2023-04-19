require 'rails_helper'

RSpec.describe GenerateRecommendationsJob, type: :job do
  include ActiveJob::TestHelper

  describe '#perform' do
    let(:user) { create(:user) }
    let(:job) { described_class.perform_later(user.id) }

    it 'queues the job' do
      expect { job }.to change(ActiveJob::Base.queue_adapter.enqueued_jobs, :size).by(1)
    end

    it 'rescues exception when user is not found' do
      expect { GenerateRecommendationsJob.perform_later(100) }.not_to raise_error
    end
  end
end
