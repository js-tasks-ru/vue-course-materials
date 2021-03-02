import flushPromises from 'flush-promises';
import { shallowMount, mount } from '@vue/test-utils';
import MeetupsPage from '@/components/MeetupsPage';
import MeetupsList from '@/components/MeetupsList';
import { fetchMeetups } from '@/data';
import meetups from '../__fixtures__/meetups.json';

jest.mock('@/data');

describe('MeetupsPage', () => {
  beforeAll(() => {
    fetchMeetups.mockResolvedValue(meetups);
  });

  it('should be defined', () => {
    expect(MeetupsPage).toBeDefined();
  });

  describe('Unit testing', () => {
    it('should render list with 2 meetups by <meetups-list>', async () => {
      const wrapper = mount(MeetupsPage, {
        stubs: {
          AppIcon: true,
          AppEmpty: true,
          MeetupsCalendar: true,
          PageTabs: true,
          FormCheck: true,
          AppInput: true,
          MeetupsList: {
            props: ['meetups'],
            render(h) {
              return h(
                'div',
                this.meetups.map((meetup) => meetup.title).join(' '),
              );
            },
          },
        },
      });
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.findComponent(MeetupsList).text()).toBe(
        meetups.map((meetup) => meetup.title).join(' '),
      );
    });

    it('should render list with 2 meetups by <meetups-list> (shallowMount)', async () => {
      const wrapper = shallowMount(MeetupsPage);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(wrapper.findComponent(MeetupsList).props('meetups')).toHaveLength(
        meetups.length,
      );
    });

    it('should match shallowMount snapshot', async () => {
      const wrapper = shallowMount(MeetupsPage);
      await flushPromises();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Integration testing', () => {
    it('should render list', async () => {
      const wrapper = mount(MeetupsPage);
      await flushPromises();
      expect(fetchMeetups).toHaveBeenCalled();
      expect(
        wrapper
          .findAll('.meetups-list__item h5')
          .wrappers.map((wrapper) => wrapper.text()),
      ).toEqual(meetups.map((meetup) => meetup.title));
    });

    it('should match mount snapshot', async () => {
      const wrapper = mount(MeetupsPage);
      await flushPromises();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
